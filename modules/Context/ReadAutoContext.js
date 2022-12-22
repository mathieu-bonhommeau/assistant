import React, { createContext, useMemo, useState } from "react";

export const ReadAutoContext = createContext(false);

function ReadAutoProvider({ children }) {
    const [isReadAuto, setIsReadAuto] = useState(false);

    const stateReadAuto = useMemo(() => {
        return { isReadAuto, setIsReadAuto };
    }, [isReadAuto, setIsReadAuto]);

    return (
        <ReadAutoContext.Provider
            value={stateReadAuto}
            setIsReadAuto={setIsReadAuto}
        >
            {children}
        </ReadAutoContext.Provider>
    );
}

export default ReadAutoProvider;
