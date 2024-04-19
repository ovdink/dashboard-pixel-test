import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer } from 'components/core';

import * as PAGES from 'pages';

import * as C from './const';
import * as S from './units';

export const NavigationRouter = () => {
    return (
        <Router>
            <S.MainWrapper>
                <Routes>
                    <Route path={C.MAIN_PAGE} element={<PAGES.MainPage />} />

                    <Route path="*" element={<div>No found page</div>} />
                </Routes>

                <Footer />
            </S.MainWrapper>
        </Router>
    );
};
