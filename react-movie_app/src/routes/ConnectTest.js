import React from "react";
import axios from "axios";
import Test from "../components/Test";
import "./Home.css";

class ConnectTest extends React.Component {
    state = {
        isLoading: true,
        info: [],
    };
    getInfo = async () => {
        const info = await axios.get(
            "/swagger/v1/api/test"
        );
        this.setState({ info: info.data, isLoading: false });
    };
    componentDidMount() {
        this.getInfo();
    }
    render() {
        const { isLoading, info } = this.state;
        console.log(info);
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">"Loading...."</span>
                    </div>
                ) : (
                        <div className="movies">
                            <h1>Connect My Java API</h1>
                            <Test
                                // key={1}
                                test={info.test}
                                content={info.content}
                            />
                        </div>
                    )}
            </section>
        );
    }
}

export default ConnectTest;
