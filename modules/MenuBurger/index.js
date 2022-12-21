import { css } from "goober";
import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import Toggle from "../Toggle";

function MenuBurger({ pageWrapId, outerContainerId }) {
    return (
        <Menu
            pageWrapId={pageWrapId}
            outerContainerId={outerContainerId}
            burgerBarClassName={css(getBurgerIconCss)}
            menuClassName={css(getMenuCss)}
        >
            <div className="border-b-2 flex justify-between border-zinc-800 py-4">
                <p className="mb-3">Lecture automatique</p>
                <div className="pb-3">
                    <Toggle />
                </div>
            </div>
        </Menu>
    );
}

const getBurgerIconCss = {
    background: "#70181677",
    borderRadius: "2px",
};

const getMenuCss = {
    background: "rgb(17, 24, 39)",
};

export default MenuBurger;
