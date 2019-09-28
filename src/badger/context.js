import React, { useEffect, useState } from 'react';
import { useBadger } from './useBadger';
import { getBalance } from './getBalance';
import { getWallet } from './createWallet';
import { createToken } from './createToken';
import { sendToken } from './sendToken';
import { mintToken } from './mintToken';
export const BadgerContext = React.createContext();

export const BadgerProvider = ({ children }) => {
    const {error} = useBadger();
    const [wallet, setWallet] = useState();

    useEffect(() => {
        const w = getWallet();
        setWallet(w);
        getBalance(w)
            .then((balance) => {
                if(balance.tokens) {
                    // sendToken(w, { address: 'slptest:qzmxdkn43xafya0cfmxh3hqnumtfwwyntge0f6uc82', tokenId: balance.tokens[0].tokenId, qty: 1 });
                    mintToken(w, { tokenId: balance.tokens[0].tokenId, qty: 1 });
                }
            });
        // createToken(w, { tokenName: 'hahaha', tokenSymbol: 'hahaha', qty: 1000 })
    }, []);

    return (
        <BadgerContext.Provider value={{ wallet, error }}>
        {children}
        </BadgerContext.Provider>
    );
};
