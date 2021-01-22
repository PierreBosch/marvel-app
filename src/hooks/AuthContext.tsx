import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
    token: string;
    user: object;
}

interface SignInCredentials {
    email: string,
    password: string
}

interface AuthContextData {
    user: object;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@MarvelAPP:token');
        const user = localStorage.getItem('@MarvelAPP:user');

        if(token && user) {
            return { token, user: JSON.parse(user)};
        }

        return {} as AuthState;
    })

    const signIn = useCallback( async ({ email, password }) => {
        const response = await api.post('session', {
            email,
            password
        });

        const { token, user } = response.data;

        localStorage.setItem('@MarvelAPP:token', token);
        localStorage.setItem('@MarvelAPP:user', JSON.stringify(user));

        setData({ token, user });
    }, []);

    const signOut = useCallback( () => {
        localStorage.removeItem('@MarvelAPP:token');
        localStorage.removeItem('@MarvelAPP:user');
        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    );
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if(!context){ 
        throw new Error('useAuth must be used whitin an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };