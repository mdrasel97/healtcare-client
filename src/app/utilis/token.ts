import { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtUtils } from "./jwt";
import { envVers } from "../../config/env";

//Creating access token
const getAccessToken = (payload: JwtPayload) => {
    const accessToken = jwtUtils.createToken(
        payload,
        envVers.ACCESS_TOKEN_SECRET,
        { expiresIn: envVers.ACCESS_TOKEN_EXPIRES_IN } as SignOptions
    );

    return accessToken;
}

const getRefreshToken = (payload: JwtPayload) => {
    const refreshToken = jwtUtils.createToken(
        payload,
        envVers.REFRESH_TOKEN_SECRET,
        { expiresIn: envVers.REFRESH_TOKEN_EXPIRES_IN } as SignOptions
    );
    return refreshToken;
}



export const tokenUtils = {
    getAccessToken,
    getRefreshToken,
    // setAccessTokenCookie,
    // setRefreshTokenCookie,
    // setBetterAuthSessionCookie,
}