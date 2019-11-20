import {NavLink, useRouteMatch, Switch, Route} from "react-router-dom";
import React from "react";
import Posts from "../Class/Posts";
import Comments from "../Class/Comments";
import Photos from "../Class/Photos";

const SidebarContent = () => {


    let {my_url} = useRouteMatch();

    return (

        <div className="row">
            <div className="col-md-4 justify-center">
                <div>
                    <div>
                        <NavLink activeClassName="active btn btn-primary btn-block" exact={true} to="/">Posts</NavLink>
                    </div>
                    <div>
                        <NavLink activeClassName={"active"} exact={true} to={"/comments"}>Comments</NavLink>
                    </div>
                    <div>
                        <NavLink to={"/photos"}>Photos</NavLink>
                    </div>
                </div>

            </div>
            <div className="col-md-8">
                <Switch>
                    <Route exact path={'/comments'}>

                        <Comments/>
                    </Route>
                    <Route path="/photos">
                        <Photos/>
                    </Route>
                    <Route exact path="/">
                        <Posts/>
                    </Route>
                    <Route>
                        <h1>NOt found</h1>
                    </Route>

                </Switch>
            </div>
        </div>
    );
};
export default SidebarContent;