import { Component, useState } from "react";
import css from './Dropdown.module.css'

export const Dropdown = () => {

    const [visible, setVisible] = useState(true);

    const toggleMenuBar = () => {
        setVisible(!visible)
    }

    return (
        <div className={css.dropdown}>
            <button onClick={toggleMenuBar}>
                {
                    visible ? 'Hide' : 'Show'
                }
            </button>
            {
                visible && (<div className={css.menu}>menu</div>)
            }
        </div>
    )
}


// export class Dropdown extends Component {

//     state = {
//         visible: false,
//     }

//     toggleMenuBar = () => {
//         this.setState(({ visible }) => ({
//             visible: !visible
//         }))
//     }

//     render() {

//         return (
//             <div className={css.dropdown}>
//                 <button onClick={this.toggleMenuBar}>
//                     {
//                         this.state.visible ? 'Hide' : 'Show'
//                     }
//                 </button>
//                 {
//                     this.state.visible && (<div className={css.menu}>menu</div>)
//                 }
//             </div>
//         )
//     }
// }