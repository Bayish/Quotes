import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import {Container} from "@material-ui/core";
import NotFound from "./components/NotFound/NotFound";
import AddQuote from "./pages/AddQuote/AddQuote";
import Quotes from "./pages/Quotes/Quotes";
import EditQuote from "./pages/EditQuote/EditQuote";

function App() {
    return (
        <Layout>
            <Container>
                <Switch>
                    <Route path='/' exact component={Quotes}/>
                    <Route path='/quotes/edit/:id' component={EditQuote}/>
                    <Route path='/quotes/:category' component={Quotes}/>
                    <Route path="/add-quote" component={AddQuote}/>
                    <Route render={() => <NotFound/>}/>
                </Switch>
            </Container>
        </Layout>
    );
}

export default App;
