/**
 * Finix API
 */


import localVarRequest from 'request';
import * as http from 'http';
import * as fs from 'fs';
/* tslint:disable:no-unused-locals */
import { CreateFeeProfileRequest } from '../model/createFeeProfileRequest';
import { Error401Unauthorized } from '../model/error401Unauthorized';
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
import { Error404NotFoundList } from '../model/error404NotFoundList';
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
import { Error422InvalidFieldList } from '../model/error422InvalidFieldList';
import { FeeProfile } from '../model/feeProfile';
import { FeeProfilesList } from '../model/feeProfilesList';
import { ListFeeProfilesQueryParams } from '../model/listFeeProfilesQueryParams';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, finixList } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum FeeProfilesApiApiKeys {
}

export class FeeProfilesApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'BasicAuth': new HttpBasicAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: FeeProfilesApiApiKeys, value: string) {
        (this.authentications as any)[FeeProfilesApiApiKeys[key]].apiKey = value;
    }

    set username(username: string) {
        this.authentications.BasicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.BasicAuth.password = password;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Helper function. 
     * Create a `fee_profile`.
     * @summary Create a Fee Profile
     * @param createFeeProfileRequest 
     */

    private async createHelper(createFeeProfileRequest?: CreateFeeProfileRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FeeProfile;  }> {
        const localVarPath = this.basePath + '/fee_profiles';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/hal+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};


        (<any>Object).assign(localVarHeaderParams, options.headers);
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
        localVarHeaderParams['Content-Type'] = "application/hal+json";
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (createFeeProfileRequest && createFeeProfileRequest.hasOwnProperty('file')){
        //if (createFeeProfileRequest != undefined && createFeeProfileRequest != null && createFeeProfileRequest.hasOwnProperty('file')){
            localVarRequestOptions.formData = createFeeProfileRequest;
        }
        else{
            localVarRequestOptions.body = ObjectSerializer.serialize(createFeeProfileRequest, "CreateFeeProfileRequest");   
        }
        let authenticationPromise = Promise.resolve();
        if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: FeeProfile;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "FeeProfile");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }

    /**
     * Create a `fee_profile`.
     * @summary Create a Fee Profile
     * @param createFeeProfileRequest 
     */
    public async create(createFeeProfileRequest?: CreateFeeProfileRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<FeeProfile> {
        const responseObject = await this.createHelper(createFeeProfileRequest,  options);
        return responseObject.body;
    }

    /**
     * Create a `fee_profile`.
     * @summary Create a Fee Profile
     * @param createFeeProfileRequest 
     */
    public async createHttp(createFeeProfileRequest?: CreateFeeProfileRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: FeeProfile; }> {
        const responseObject = await this.createHelper(createFeeProfileRequest,  options);
        return responseObject;
    }
    /**
     * Helper function. 
     * Get a `fee_profile`.
     * @summary Fetch a Fee Profile
     * @param feeProfileId The ID of the &#x60;fee_profile&#x60;.
     */

    private async getHelper(feeProfileId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FeeProfile;  }> {
        const localVarPath = this.basePath + '/fee_profiles/{fee_profile_id}'
            .replace('{' + 'fee_profile_id' + '}', encodeURIComponent(String(feeProfileId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/hal+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'feeProfileId' is not null or undefined
        if (feeProfileId === null || feeProfileId === undefined) {
            throw new Error('Required parameter feeProfileId was null or undefined when calling getFeeProfile.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        let authenticationPromise = Promise.resolve();
        if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: FeeProfile;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "FeeProfile");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }

    /**
     * Get a `fee_profile`.
     * @summary Fetch a Fee Profile
     * @param feeProfileId The ID of the &#x60;fee_profile&#x60;.
     */
    public async get(feeProfileId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<FeeProfile> {
        const responseObject = await this.getHelper(feeProfileId,  options);
        return responseObject.body;
    }

    /**
     * Get a `fee_profile`.
     * @summary Fetch a Fee Profile
     * @param feeProfileId The ID of the &#x60;fee_profile&#x60;.
     */
    public async getHttp(feeProfileId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: FeeProfile; }> {
        const responseObject = await this.getHelper(feeProfileId,  options);
        return responseObject;
    }
    /**
     * Helper function. 
     * List all `Fee Profiles`.
     * @summary List Fee Profiles

    */
    private async listHelper (listFeeProfilesQueryParams?:ListFeeProfilesQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FeeProfilesList;  }> {
        const localVarPath = this.basePath + '/fee_profiles';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/hal+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (listFeeProfilesQueryParams != undefined){ 
            if (listFeeProfilesQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = ObjectSerializer.serialize(listFeeProfilesQueryParams.afterCursor, "string");
            }
            if (listFeeProfilesQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = ObjectSerializer.serialize(listFeeProfilesQueryParams.beforeCursor, "string");
            }
            if (listFeeProfilesQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listFeeProfilesQueryParams.limit, "number");
            }

        }
        (<any>Object).assign(localVarHeaderParams, options.headers);
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        let authenticationPromise = Promise.resolve();
        if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: FeeProfilesList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "FeeProfilesList");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }

    /**
     * List all `Fee Profiles`.
     * @summary List Fee Profiles
     */
    public async list (listFeeProfilesQueryParams?:ListFeeProfilesQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<finixList<any>> {
        const responseObject = await this.listHelper(listFeeProfilesQueryParams, options);
        // Check if response body has nextCursor property or offset property and extract the corresponding fields
        let reachedEnd: Boolean;
        const hasNextCursor: any = responseObject.body?.page?.hasOwnProperty('nextCursor');
        let queryParam: any = hasNextCursor ? { afterCursor: '', limit: 20 } : { offset: '', limit: 20 };

        [queryParam, reachedEnd] = hasNextCursor
        ? this.getCursorQueryParam(responseObject, queryParam) 
        : this.getOffsetQueryParam(responseObject, queryParam);

        const nextFetch = (limit?: number) => {
            queryParam.limit = limit;
            if (reachedEnd){
                throw new RangeError("End of list reached");
            }
            return this.list(queryParam);
        }
        let dataList = new finixList<any>(nextFetch, !reachedEnd);
        dataList = this.embeddedHelper(responseObject, dataList);
        return dataList;
    }

    /**
     * List all `Fee Profiles`.
     * @summary List Fee Profiles
     */
    public async listHttp (listFeeProfilesQueryParams?:ListFeeProfilesQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<{response: http.IncomingMessage, body: finixList<any>}> {
        const responseObject = await this.listHelper(listFeeProfilesQueryParams, options);
        // Check if response body has nextCursor property or offset property and extract the corresponding fields
        let reachedEnd: Boolean;
        const hasNextCursor: any = responseObject.body?.page?.hasOwnProperty('nextCursor');
        let queryParam: any = hasNextCursor ? { afterCursor: '', limit: 20 } : { offset: '', limit: 20 };

        [queryParam, reachedEnd] = hasNextCursor
        ? this.getCursorQueryParam(responseObject, queryParam) 
        : this.getOffsetQueryParam(responseObject, queryParam);

        const nextFetch = (limit?: number) => {
            queryParam.limit = limit;
            if (reachedEnd){
                throw new RangeError("End of list reached");
            }
            return this.list(queryParam);
        }
        let dataList = new finixList<any>(nextFetch, reachedEnd);
        dataList = this.embeddedHelper(responseObject, dataList);
        //dataList.hasMore = !reachedEnd;
        return Promise.resolve({response: responseObject.response, body: dataList});
    }

    /**
     * Extracts page and links fields from response body and assigns as properties to finixList
     */ 
    private embeddedHelper(responseObject: any, dataList: finixList<any>){
        if(responseObject.body.embedded == null || responseObject.body.embedded == undefined){
            dataList.page = responseObject.body.page;
            dataList.links = responseObject.body.links;
            return dataList;
        }
        const embeddedName = Object.getOwnPropertyNames(responseObject.body.embedded)[0];
        let tempList = <finixList<any>> responseObject.body.embedded[embeddedName];
        tempList.forEach(item => {dataList.add(item)});
        dataList.page = responseObject.body.page;
        dataList.links = responseObject.body.links;
        return dataList;
    }

    /**
     * Extracts offset value from response body and determines if end of list has been reached
     */
    private getOffsetQueryParam(responseObject: any, queryParam: any){
        queryParam.offset = responseObject.body.page.offset + responseObject.body.page.limit;
        var endReached: Boolean = false;
        if (responseObject.body.page.offset + responseObject.body.page.limit > responseObject.body.page.count){
            endReached = true;
        }
        return [queryParam, endReached];
    }

    /**
    * Extracts nextCursor value from response body and determines if end of list has been reached
    */
    private getCursorQueryParam(responseObject: any, queryParam: any){
        queryParam.afterCursor = responseObject.body.page.nextCursor;
        var endReached: Boolean = false;
        if (responseObject.body.page.nextCursor == undefined){
            endReached = true;
        }
        return [queryParam, endReached];
    }
}   
