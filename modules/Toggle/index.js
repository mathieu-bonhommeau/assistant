import { useContext, useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { ReadAutoContext } from "../Context/ReadAutoContext";

function Toggle() {
    const [enabled, setEnabled] = useState(false);
    const { setIsReadAuto } = useContext(ReadAutoContext);

    useEffect(() => {
        enabled ? setIsReadAuto(true) : setIsReadAuto(false);
    }, [enabled]);

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
                enabled ? "bg-gray-200" : "bg-gray-400"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
            <span className="sr-only">Activer la lecture automatique</span>
            <span
                className={`${
                    enabled ? "bg-[#111827] translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-gray-200 transition`}
            />
        </Switch>
    );
}

export default Toggle;
