import * as React from "react";
import * as ReactDOM from "react-dom";

import { BaseComponent } from "../common/BaseComponent";
import TopMenu from "../components/header/topMenu";
import LeftMenu from "../components/leftmenu/leftMenu";
import Dashboard from "../components/dashboard/dashboard";

class Index extends BaseComponent<undefined, undefined> {
    render() {
        return (<div className="row">
            <Dashboard />
        </div>
        );
    }
}
ReactDOM.render(<TopMenu
    brandItemText=""
     menuItems={[
        { customClass: undefined, Text: 'Reports',Url:'./reports.html' },
        { customClass: undefined, Text: 'Samples',Url:'./samples.html' },
        { customClass: undefined, Text: 'Standarts',Url:'./standarts.html' },
        { customClass: 'disabled', Text: 'Tests',Url:'./tests.html' },
    ]} />,document.querySelector('.topMenu'));
    
ReactDOM.render(<Index />, document.querySelector('.app'));