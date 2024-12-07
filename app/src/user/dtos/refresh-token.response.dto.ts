interface IRefreshTokenAttributes {
    access_token: string;
    refresh_token: string;
}

export class RefreshTokenResponseDto {
    access_token: string;
    refresh_token: string;

    static factory(data: IRefreshTokenAttributes): RefreshTokenResponseDto {
        const result = new RefreshTokenResponseDto();

        result.access_token = data.access_token;
        result.refresh_token = data.refresh_token;

        return result;
    }
}
