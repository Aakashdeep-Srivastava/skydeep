import { RefObject, MutableRefObject } from "react";

interface AppContext {
  sharedState: {
    userdata: {
      timerCookieRef: MutableRefObject<ReturnType<typeof setInterval> | null>;
      windowSizeTracker: MutableRefObject<(() => void) | null>;
      mousePositionTracker: MutableRefObject<((event: MouseEvent) => void) | null>;
    };
  };
}

interface CookieCutter {
  get: (name: string) => string | undefined;
  set: (name: string, value: string) => void;
}

interface CookieTimeCounterParams {
  context: AppContext;
  secUnits: RefObject<HTMLSpanElement | null>;
  secTens: RefObject<HTMLSpanElement | null>;
  minUnits: RefObject<HTMLSpanElement | null>;
  minTens: RefObject<HTMLSpanElement | null>;
  cookieCutter: CookieCutter;
}

interface MouseWindowEventListnersParams {
  context: AppContext;
  windowWidth: RefObject<HTMLSpanElement | null>;
  windowHeight: RefObject<HTMLSpanElement | null>;
  mouseX: RefObject<HTMLSpanElement | null>;
  mouseY: RefObject<HTMLSpanElement | null>;
}

interface UserInfoParams {
  setLocation: (location: number[]) => void;
  setZipCode: (zipCode: string) => void;
  setGpuTier: (gpuTier: object) => void;
  userData: MutableRefObject<Record<string, unknown> | null>;
  cookieCutter: CookieCutter;
  lastVisit_Ref: RefObject<HTMLSpanElement | null>;
  firstVisit_Ref: RefObject<HTMLSpanElement | null>;
}

// ? this will update secUnits each second, secTens, minUnits, minTens cookies then update the span from cookies values
export const CookieTimeCounter = ({
  context,
  secUnits,
  secTens,
  minUnits,
  minTens,
  cookieCutter,
}: CookieTimeCounterParams) => {
  if (typeof window != undefined) {
    // Cookie existence verification
    if (cookieCutter.get("timer-sec-units")) {
      console.log(
        "current cookie timer-sec-units value in useEffect: ",
        cookieCutter.get("timer-sec-units")
      );
    } else {
      console.log("timer cookie not exist");
      cookieCutter.set("timer-sec-units", String("0"));
      cookieCutter.set("timer-sec-tens", String("0"));
      cookieCutter.set("timer-min-units", String("0"));
      cookieCutter.set("timer-min-tens", String("0"));
    }
    // set setInterval for the context.sharedState.userdata.timerCookieRef
    context.sharedState.userdata.timerCookieRef.current = setInterval(
      function () {
        const countSec = Number(cookieCutter.get("timer-sec-units")) + 1;
        cookieCutter.set("timer-sec-units", String(countSec));

        if (countSec > 9) {
          cookieCutter.set("timer-sec-units", String("0"));
          cookieCutter.set(
            "timer-sec-tens",
            String(Number(cookieCutter.get("timer-sec-tens")) + 1)
          );
          const countSecTens = Number(cookieCutter.get("timer-sec-tens"));
          if (countSecTens > 5) {
            cookieCutter.set("timer-sec-tens", String("0"));
            cookieCutter.set(
              "timer-min-units",
              String(Number(cookieCutter.get("timer-min-units")) + 1)
            );
            const countMinUnits = Number(cookieCutter.get("timer-min-units"));
            if (countMinUnits > 9) {
              cookieCutter.set("timer-min-units", String("0"));
              cookieCutter.set(
                "timer-min-tens",
                String(Number(cookieCutter.get("timer-min-tens")) + 1)
              );
            }
          }
        }
        // this checking is to prevent from type checking,
        // "secUnits.current" will be undefined if it is not yet rendered on the other pages
        if (secUnits.current) {
          secUnits.current.innerText = cookieCutter.get("timer-sec-units") ?? "0";
          if (secTens.current) secTens.current.innerText = cookieCutter.get("timer-sec-tens") ?? "0";
          if (minUnits.current) minUnits.current.innerText = cookieCutter.get("timer-min-units") ?? "0";
          if (minTens.current) minTens.current.innerText = cookieCutter.get("timer-min-tens") ?? "0";
        }

        console.log("Cookie Timer Setter...");
      },
      1000
    );
  }
};

// ? Declare Mouse Event and Window size tracker event
export const MouseWindowEventListners = ({
  context,
  windowWidth,
  windowHeight,
  mouseX,
  mouseY,
}: MouseWindowEventListnersParams) => {
  // assign context windowSize Ref here in useEffect once, so to make sure that it only assigned once
  context.sharedState.userdata.windowSizeTracker.current = () => {
    if (windowWidth.current && windowHeight.current) {
      windowWidth.current.innerText = String(window.innerWidth);
      windowHeight.current.innerText = String(window.innerHeight);
    }
    console.log("Window Size Tracker...");
  };
  // assint mousePositionTracker.current here to use in the as fallback function for the event
  // and to remove the event in the other pages
  context.sharedState.userdata.mousePositionTracker.current = (event: MouseEvent) => {
    if (mouseX.current && mouseY.current) {
      mouseX.current.innerText = String(event.pageX);
      mouseY.current.innerText = String(event.pageY);
    }
    console.log("Mouse Position Tracker...");
  };
  // Apply this event Listener on Client
  if (typeof window !== "undefined") {
    // window size tracker
    window.addEventListener(
      "resize",
      context.sharedState.userdata.windowSizeTracker.current
    );
    // mouse position tracker
    window.addEventListener(
      "mousemove",
      context.sharedState.userdata.mousePositionTracker.current,
      false
    );
  }
};

import { detect } from "detect-browser";
import { getGPUTier } from "detect-gpu";
// ? async function for getting user information. IP, location, zip code, browser, OS, GPU, etc.
export const userInfo = async ({
  setLocation,
  setZipCode,
  setGpuTier,
  userData,
  cookieCutter,
  lastVisit_Ref,
  firstVisit_Ref,
}: UserInfoParams) => {
  // this api will return current ip address of the requester
  const IP_Address = async () => {
    return fetch("https://api.ipify.org/?format=json")
      .then(res => res.json())
      .then(data => data.ip);
  };
  // call api by passing the IP address of the requester & store in api_data
  const api_data = async () => {
    return fetch("/api/userInfoByIP/" + (await IP_Address()))
      .then(res => res.json())
      .then(data => data);
  };
  //to determine the browser info
  const browser = detect();
  // get user Data from the api
  const result = await api_data();
  // Client side checks
  if (browser) {
    result["browser"] = browser.name;
    result["browserVersion"] = browser.version;
    result["browserOS"] = browser.os;
  }
  if (screen) {
    result["screenWidth"] = screen.width;
    result["screenHeight"] = screen.height;
    result["screenOrientationType"] = screen.orientation.type;
    result["screenColorDepth"] = screen.colorDepth + " bits";
  }
  if (navigator) {
    result["NavigatorLanguages"] = navigator.languages;
    result["NavigatorLogicalCores"] = navigator.hardwareConcurrency + " cores";
  }
  // ? this will add battery level if it's supported on the browser
  if (navigator) {
    if (navigator.hasOwnProperty("getBattery")) {
      //@ts-ignore
      navigator.getBattery().then(battery => {
        result["batteryLevel"] = battery.level + " %";
        console.log("battery level : ", battery.level + " %");
      });
    } else {
      result["batteryLevel"] = "Not supported";
    }
  }
  const temp_array_location = [];
  temp_array_location.push(result.lat);
  temp_array_location.push(result.lon);
  setLocation([...temp_array_location]);
  console.log("useEffect run, data :", result);
  setZipCode(result.zip);
  userData.current = result;
  // first & last visit tracker with conditional statement using cookies.
  //it's inside userInfo function to get the current time by the ip Address
  if (cookieCutter.get("first-visit")) {
    if (lastVisit_Ref.current) {
      lastVisit_Ref.current.innerText = cookieCutter.get("last-visit") ?? "";
    }
    cookieCutter.set("last-visit", result.datetime);
  } else {
    if (lastVisit_Ref.current) {
      lastVisit_Ref.current.innerText = "Now";
    }
    cookieCutter.set("first-visit", result.datetime);
    cookieCutter.set("last-visit", result.datetime);
  }
  if (firstVisit_Ref.current) {
    firstVisit_Ref.current.innerText = cookieCutter.get("first-visit") ?? "";
  }
  // set up gpuTier state value
  const gpuTier_data = await getGPUTier();
  setGpuTier(Object(gpuTier_data));
};

// ? update Location on click event callback function
export const onClickUpdateLocation = async (
  setUpdatingLocatinResult: (value: boolean) => void,
  setUpdatingLocation: (value: boolean) => void,
  setLocation: (location: number[]) => void,
  setZipCode: (zipCode: string) => void
) => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }
  // function will be executed after permission is authorized
  function success(position: GeolocationPosition) {
    setLocation([position.coords.latitude, position.coords.longitude]);
    const temp_array_location: number[] = [];
    temp_array_location.push(position.coords.latitude);
    temp_array_location.push(position.coords.longitude);
    // set new lat and lon
    setLocation([...temp_array_location]);
    // Show Map
    setUpdatingLocation(false);
    // Hide "Unable to retieve location" message
    setUpdatingLocatinResult(false);

    // call the api by passing new lat and lon
    const api_get_zip = async (lat: number, lon: number) => {
      return fetch("/api/userInfoByLatLon/" + lat + "/" + lon)
        .then(res => res.json())
        .then(data => {
          return data;
        });
    };
    // change zipcode useState
    const setNewZip = async () =>
      setZipCode(
        await api_get_zip(position.coords.latitude, position.coords.longitude)
      );
    setNewZip();

    console.log(
      "Updated == > Longitude:",
      position.coords.longitude,
      "Latitude:",
      position.coords.latitude
    );
  }
  // function will be executed after permission is denied
  function error() {
    // error Show Unable to retieve location message
    setUpdatingLocatinResult(true);
    //Show Map after failed to update location
    setUpdatingLocation(false);
  }
  // ask for permission to access location
  navigator.geolocation.getCurrentPosition(success, error);
};

interface GpuTier {
  gpu?: string;
  [key: string]: unknown;
}

interface UserData {
  browser?: string;
  browserVersion?: string;
  browserOS?: string;
  NavigatorLanguages?: string[];
  NavigatorLogicalCores?: string;
  query?: string;
  city?: string;
  regionName?: string;
  region?: string;
  country?: string;
  datetime?: string;
  batteryLevel?: string;
  as?: string;
  [key: string]: unknown;
}

// data for Additional Information Section 1
export const Additional_data = (userData: MutableRefObject<UserData | null>, gpuTier: GpuTier | null) => {
  return [
    { title: "Browser :", value: userData.current?.browser || "Checking..." },
    {
      title: "Browser Version :",
      value: userData.current?.browserVersion || "Checking...",
    },
    {
      title: "Languages :",
      value:
        userData.current?.NavigatorLanguages?.toString().replace(",", ", ") ||
        "Checking...",
    },
    { title: "OS :", value: userData.current?.browserOS || "Checking..." },
    {
      title: "CPU cores :",
      value: userData.current?.NavigatorLogicalCores || "Checking...",
    },
    {
      title: "GPU :",
      value: gpuTier?.gpu || "Checking...",
    },
  ];
};

// data for the table
export const tableData = (userData: MutableRefObject<UserData | null>, zipCode: string) => {
  return [
    {
      title: "IP Address :",
      value: userData.current?.query || "Checking...",
    },
    { title: "City :", value: userData.current?.city || "Checking..." },
    { title: "Zip Code :", value: zipCode || "Checking..." },
    {
      title: "Region :",
      value: userData.current?.regionName || "Checking...",
    },
    {
      title: "Region Code :",
      value: userData.current?.region || "Checking...",
    },
    { title: "Country :", value: userData.current?.country || "Checking..." },
    {
      title: "Current Date/time :",
      value: userData.current?.datetime || "Checking...",
    },
    {
      title: "Battery :",
      value: userData.current?.batteryLevel || "Checking...",
    },
    { title: "As :", value: userData.current?.as || "Checking..." },
  ];
};
