import React, { createContext, useMemo, useState } from "react";

export const ReadPersoContext = createContext(false);

function ReadPersoProvider({ children }) {
    const [message, setMessage] = useState(false);

    const statePersoAuto = useMemo(() => {
        return { message, setMessage };
    }, [message, setMessage]);

    return (
        <ReadPersoContext.Provider value={statePersoAuto}>
            {children}
        </ReadPersoContext.Provider>
    );
}

export default ReadPersoProvider;
