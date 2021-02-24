import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { FetchRepos } from "../ApolloGQL/FetchRepos"
import { createGlobalStyle, ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from "../Themes/themes";
import { useSelector } from "../Hooks/Hooks";



export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
  }
  button {
    border: ${(props) => props.theme.border} !important;
  }
`;


export default function App() {
    const theme = useSelector(state => state.app.theme) === false ? lightTheme : darkTheme

    return (
        <ThemeProvider theme={theme}>
            <div data-test="component-app" className="App_wrapper">
                <GlobalStyle />
                    <Header />
                    <FetchRepos />
                    <Footer />
            </div>
        </ThemeProvider>
  )
}
