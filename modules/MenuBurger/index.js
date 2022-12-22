import { css } from "goober";
import React, { useContext } from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import { ReadAutoContext } from "../Context/ReadAutoContext";
import Toggle from "../Toggle";

function MenuBurger({ pageWrapId, outerContainerId }) {
    const { isReadAuto } = useContext(ReadAutoContext);

    return (
        <Menu
            pageWrapId={pageWrapId}
            outerContainerId={outerContainerId}
            burgerBarClassName={css(getBurgerIconCss)}
            menuClassName={css(getMenuCss)}
        >
            <div className="border-b-2 flex justify-between border-zinc-800 py-4">
                <p className="mb-5 text-xl">Lecture automatique</p>
                <div className="pb-3 flex justify-between">
                    <span className="text-md">
                        {isReadAuto ? "Activé" : "Désactivé"}
                    </span>
                    <Toggle />
                </div>
            </div>
        </Menu>
    );
}

const getBurgerIconCss = {
    background: "#701816AA",
    borderRadius: "2px",
};

const getMenuCss = {
    background: "rgb(17, 24, 39)",
};

export default MenuBurger;
