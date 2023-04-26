/* tslint:disable */
/* eslint-disable */
/**
 * MMS-Team-7
 *  Mentors Management system is a people management app that enables proper. coordination of mentors needed to execute projects, ranging from recruitment to off-boarding. Ensue to go through the app doc below to read more and follow all the instructions.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ChangePasswordRequest
 */
export interface ChangePasswordRequest {
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    'current_password'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    'new_password'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    'confirm_password'?: string;
}
/**
 * 
 * @export
 * @interface Contact
 */
export interface Contact {
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    'website'?: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    'location'?: string;
}
/**
 * 
 * @export
 * @interface CreateFAQResponse
 */
export interface CreateFAQResponse {
    /**
     * 
     * @type {FAQ}
     * @memberof CreateFAQResponse
     */
    'data'?: FAQ;
}
/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'error'?: string;
}
/**
 * 
 * @export
 * @interface FAQ
 */
export interface FAQ {
    /**
     * 
     * @type {string}
     * @memberof FAQ
     */
    'question'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAQ
     */
    'answer'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAQ
     */
    'category'?: string;
}
/**
 * 
 * @export
 * @interface ForgotPasswordPostRequest
 */
export interface ForgotPasswordPostRequest {
    /**
     * 
     * @type {string}
     * @memberof ForgotPasswordPostRequest
     */
    'email'?: string;
}
/**
 * 
 * @export
 * @interface GetFAQsResponse
 */
export interface GetFAQsResponse {
    /**
     * 
     * @type {Array<FAQ>}
     * @memberof GetFAQsResponse
     */
    'data'?: Array<FAQ>;
}
/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'password'?: string;
}
/**
 * 
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse {
    /**
     * 
     * @type {LoginResponseData}
     * @memberof LoginResponse
     */
    'data'?: LoginResponseData;
}
/**
 * 
 * @export
 * @interface LoginResponseData
 */
export interface LoginResponseData {
    /**
     * 
     * @type {string}
     * @memberof LoginResponseData
     */
    'token'?: string;
    /**
     * 
     * @type {LoginResponseDataPayload}
     * @memberof LoginResponseData
     */
    'payload'?: LoginResponseDataPayload;
    /**
     * 
     * @type {User}
     * @memberof LoginResponseData
     */
    'user'?: User;
}
/**
 * 
 * @export
 * @interface LoginResponseDataPayload
 */
export interface LoginResponseDataPayload {
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDataPayload
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDataPayload
     */
    'user_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDataPayload
     */
    'user_role'?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDataPayload
     */
    'issued_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDataPayload
     */
    'expired_at'?: string;
}
/**
 * 
 * @export
 * @interface Socials
 */
export interface Socials {
    /**
     * 
     * @type {SocialsGithubUrl}
     * @memberof Socials
     */
    'github_url'?: SocialsGithubUrl;
    /**
     * 
     * @type {SocialsGithubUrl}
     * @memberof Socials
     */
    'linkedin_url'?: SocialsGithubUrl;
    /**
     * 
     * @type {SocialsGithubUrl}
     * @memberof Socials
     */
    'twitter_url'?: SocialsGithubUrl;
    /**
     * 
     * @type {SocialsGithubUrl}
     * @memberof Socials
     */
    'instagram_url'?: SocialsGithubUrl;
}
/**
 * 
 * @export
 * @interface SocialsGithubUrl
 */
export interface SocialsGithubUrl {
    /**
     * 
     * @type {string}
     * @memberof SocialsGithubUrl
     */
    'value'?: string;
    /**
     * 
     * @type {string}
     * @memberof SocialsGithubUrl
     */
    'is_visible'?: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'full_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'role'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'about'?: string;
    /**
     * 
     * @type {Contact}
     * @memberof User
     */
    'contact'?: Contact;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'profile_image_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'password_changed_at'?: string;
    /**
     * 
     * @type {Socials}
     * @memberof User
     */
    'socials'?: Socials;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'is_email_verified'?: boolean;
}
/**
 * 
 * @export
 * @interface UsersIdChangePasswordPatch200Response
 */
export interface UsersIdChangePasswordPatch200Response {
    /**
     * 
     * @type {string}
     * @memberof UsersIdChangePasswordPatch200Response
     */
    'result'?: string;
}
/**
 * 
 * @export
 * @interface UsersIdPost200Response
 */
export interface UsersIdPost200Response {
    /**
     * 
     * @type {string}
     * @memberof UsersIdPost200Response
     */
    'result'?: string;
    /**
     * 
     * @type {UsersIdPost200ResponseData}
     * @memberof UsersIdPost200Response
     */
    'data'?: UsersIdPost200ResponseData;
}
/**
 * 
 * @export
 * @interface UsersIdPost200ResponseData
 */
export interface UsersIdPost200ResponseData {
    /**
     * 
     * @type {string}
     * @memberof UsersIdPost200ResponseData
     */
    'full_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersIdPost200ResponseData
     */
    'about'?: string;
    /**
     * 
     * @type {Contact}
     * @memberof UsersIdPost200ResponseData
     */
    'contact'?: Contact;
    /**
     * 
     * @type {Socials}
     * @memberof UsersIdPost200ResponseData
     */
    'socials'?: Socials;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Google sign-in callback
         * @param {any} code The authorization code returned by Google after the user approves access
         * @param {any} state A value passed by the client which is returned unchanged in the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authGoogleCallbackGet: async (code: any, state: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('authGoogleCallbackGet', 'code', code)
            // verify required parameter 'state' is not null or undefined
            assertParamExists('authGoogleCallbackGet', 'state', state)
            const localVarPath = `/auth/google/callback`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
            }

            if (state !== undefined) {
                localVarQueryParameter['state'] = state;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Initiate Google Sign-In flow by redirecting the user to Google authorization endpoint
         * @summary Initiate Google Sign-In
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authGoogleLoginGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/google/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Login a user
         * @param {LoginRequest} userCredentials Email address and password of the user to authenticate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost: async (userCredentials: LoginRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userCredentials' is not null or undefined
            assertParamExists('authLoginPost', 'userCredentials', userCredentials)
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userCredentials, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all FAQs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        faqsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/faqs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create FAQ
         * @param {FAQ} fAQDetails Details of FAQ to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        faqsPost: async (fAQDetails: FAQ, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fAQDetails' is not null or undefined
            assertParamExists('faqsPost', 'fAQDetails', fAQDetails)
            const localVarPath = `/faqs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(fAQDetails, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Request for password reset
         * @param {ForgotPasswordPostRequest} usersEmail User\&#39;s email to send reset password email/token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forgotPasswordPost: async (usersEmail: ForgotPasswordPostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'usersEmail' is not null or undefined
            assertParamExists('forgotPasswordPost', 'usersEmail', usersEmail)
            const localVarPath = `/forgot_password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(usersEmail, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Changer user\'s password
         * @param {ChangePasswordRequest} newPassword Current password and new password of the user to update
         * @param {string} id ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIdChangePasswordPatch: async (newPassword: ChangePasswordRequest, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newPassword' is not null or undefined
            assertParamExists('usersIdChangePasswordPatch', 'newPassword', newPassword)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersIdChangePasswordPatch', 'id', id)
            const localVarPath = `/users/:id/change_password`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(newPassword, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update user\'s profile info
         * @param {User} usersInfo Update user\&#39;s profile data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIdPost: async (usersInfo: User, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'usersInfo' is not null or undefined
            assertParamExists('usersIdPost', 'usersInfo', usersInfo)
            const localVarPath = `/users/:id`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(usersInfo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Google sign-in callback
         * @param {any} code The authorization code returned by Google after the user approves access
         * @param {any} state A value passed by the client which is returned unchanged in the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authGoogleCallbackGet(code: any, state: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authGoogleCallbackGet(code, state, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Initiate Google Sign-In flow by redirecting the user to Google authorization endpoint
         * @summary Initiate Google Sign-In
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authGoogleLoginGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authGoogleLoginGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Login a user
         * @param {LoginRequest} userCredentials Email address and password of the user to authenticate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authLoginPost(userCredentials: LoginRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authLoginPost(userCredentials, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all FAQs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async faqsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFAQsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.faqsGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create FAQ
         * @param {FAQ} fAQDetails Details of FAQ to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async faqsPost(fAQDetails: FAQ, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateFAQResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.faqsPost(fAQDetails, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Request for password reset
         * @param {ForgotPasswordPostRequest} usersEmail User\&#39;s email to send reset password email/token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async forgotPasswordPost(usersEmail: ForgotPasswordPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersIdChangePasswordPatch200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.forgotPasswordPost(usersEmail, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Changer user\'s password
         * @param {ChangePasswordRequest} newPassword Current password and new password of the user to update
         * @param {string} id ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersIdChangePasswordPatch(newPassword: ChangePasswordRequest, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersIdChangePasswordPatch200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdChangePasswordPatch(newPassword, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update user\'s profile info
         * @param {User} usersInfo Update user\&#39;s profile data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersIdPost(usersInfo: User, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersIdPost200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdPost(usersInfo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Google sign-in callback
         * @param {any} code The authorization code returned by Google after the user approves access
         * @param {any} state A value passed by the client which is returned unchanged in the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authGoogleCallbackGet(code: any, state: any, options?: any): AxiosPromise<LoginResponse> {
            return localVarFp.authGoogleCallbackGet(code, state, options).then((request) => request(axios, basePath));
        },
        /**
         * Initiate Google Sign-In flow by redirecting the user to Google authorization endpoint
         * @summary Initiate Google Sign-In
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authGoogleLoginGet(options?: any): AxiosPromise<void> {
            return localVarFp.authGoogleLoginGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Login a user
         * @param {LoginRequest} userCredentials Email address and password of the user to authenticate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost(userCredentials: LoginRequest, options?: any): AxiosPromise<LoginResponse> {
            return localVarFp.authLoginPost(userCredentials, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all FAQs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        faqsGet(options?: any): AxiosPromise<GetFAQsResponse> {
            return localVarFp.faqsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create FAQ
         * @param {FAQ} fAQDetails Details of FAQ to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        faqsPost(fAQDetails: FAQ, options?: any): AxiosPromise<CreateFAQResponse> {
            return localVarFp.faqsPost(fAQDetails, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Request for password reset
         * @param {ForgotPasswordPostRequest} usersEmail User\&#39;s email to send reset password email/token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forgotPasswordPost(usersEmail: ForgotPasswordPostRequest, options?: any): AxiosPromise<UsersIdChangePasswordPatch200Response> {
            return localVarFp.forgotPasswordPost(usersEmail, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Changer user\'s password
         * @param {ChangePasswordRequest} newPassword Current password and new password of the user to update
         * @param {string} id ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIdChangePasswordPatch(newPassword: ChangePasswordRequest, id: string, options?: any): AxiosPromise<UsersIdChangePasswordPatch200Response> {
            return localVarFp.usersIdChangePasswordPatch(newPassword, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update user\'s profile info
         * @param {User} usersInfo Update user\&#39;s profile data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIdPost(usersInfo: User, options?: any): AxiosPromise<UsersIdPost200Response> {
            return localVarFp.usersIdPost(usersInfo, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Google sign-in callback
     * @param {any} code The authorization code returned by Google after the user approves access
     * @param {any} state A value passed by the client which is returned unchanged in the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public authGoogleCallbackGet(code: any, state: any, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).authGoogleCallbackGet(code, state, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Initiate Google Sign-In flow by redirecting the user to Google authorization endpoint
     * @summary Initiate Google Sign-In
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public authGoogleLoginGet(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).authGoogleLoginGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Login a user
     * @param {LoginRequest} userCredentials Email address and password of the user to authenticate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public authLoginPost(userCredentials: LoginRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).authLoginPost(userCredentials, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all FAQs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public faqsGet(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).faqsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create FAQ
     * @param {FAQ} fAQDetails Details of FAQ to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public faqsPost(fAQDetails: FAQ, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).faqsPost(fAQDetails, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Request for password reset
     * @param {ForgotPasswordPostRequest} usersEmail User\&#39;s email to send reset password email/token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public forgotPasswordPost(usersEmail: ForgotPasswordPostRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).forgotPasswordPost(usersEmail, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Changer user\'s password
     * @param {ChangePasswordRequest} newPassword Current password and new password of the user to update
     * @param {string} id ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public usersIdChangePasswordPatch(newPassword: ChangePasswordRequest, id: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).usersIdChangePasswordPatch(newPassword, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update user\'s profile info
     * @param {User} usersInfo Update user\&#39;s profile data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public usersIdPost(usersInfo: User, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).usersIdPost(usersInfo, options).then((request) => request(this.axios, this.basePath));
    }
}

