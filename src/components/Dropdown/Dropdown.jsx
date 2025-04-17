import { Component } from "react";
import css from './Dropdown.module.css'

export class Dropdown extends Component {
    render() {
        return(
            <div className={css.dropdown}>
                <button>Show</button>
                <div className={css.menu}>menu</div>
            </div>
        )
    }
}