import { Component } from "react";
import css from './Dropdown.module.css'

export class Dropdown extends Component {

    state = {
        visible: false,
    }

    toggleMenuBar = () => {
        this.setState(({ visible }) => ({
            visible: !visible
        }))
    }

    render() {

        return (
            <div className={css.dropdown}>
                <button onClick={this.toggleMenuBar}>
                    {
                        this.state.visible ? 'Hide' : 'Show'
                    }
                </button>
                {
                    this.state.visible && (<div className={css.menu}>menu</div>)
                }
            </div>
        )
    }
}