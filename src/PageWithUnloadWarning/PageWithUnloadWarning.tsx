import React, { useEffect } from "react";

const PageWithUnloadWarning = () => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Standard way to trigger a confirmation dialog
      event.preventDefault();
      event.returnValue = ""; // Required for the dialog to be shown in some browsers
      return ""; // Some browsers need this as well
    };

    // Attach the event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      {/* Your component content */}
      <h1>Page with Unload Warning</h1>
    </div>
  );
};

export default PageWithUnloadWarning;
