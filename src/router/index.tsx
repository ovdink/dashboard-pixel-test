import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

import { SideMenu } from 'components/core';

import { wagmiConfig } from 'config/wagmi';
import * as PAGES from 'pages';

import * as C from './const';
import * as S from './units';

const queryClient = new QueryClient();

export const NavigationRouter = () => {
    return (
        <Router>
            <WagmiProvider config={wagmiConfig}>
                <QueryClientProvider client={queryClient}>
                    <S.MainWrapper>
                        <SideMenu />

                        <Routes>
                            <Route path={C.MAIN_PAGE} element={<PAGES.MainPage />} />

                            <Route path="*" element={<div>No found page</div>} />
                        </Routes>
                    </S.MainWrapper>
                </QueryClientProvider>
            </WagmiProvider>
        </Router>
    );
};
