// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem403, WorkspacesList401Response, WorkspacesList500Response, WorkspacesWorkspaceListResponse } from '../types';


export type WorkspacesListParams = {
  options?: AxiosRequestConfig
}

const isWorkspacesListObjectParams = (params: [WorkspacesListParams] | unknown[]): params is [WorkspacesListParams] => {
  return params.length === 1
}
/**
* List workspaces in a tenant
* @summary List workspaces in a tenant
* @param {WorkspacesListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const workspacesListParamCreator = async (...config: ([WorkspacesListParams] | [AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isWorkspacesListObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WorkspacesListParams;
    const { options = {} } = params;
    const localVarPath = `/workspaces/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default workspacesListParamCreator;
