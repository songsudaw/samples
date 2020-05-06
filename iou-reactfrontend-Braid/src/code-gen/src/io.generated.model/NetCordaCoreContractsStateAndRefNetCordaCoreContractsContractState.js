/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NetCordaCoreContractsStateRef from './NetCordaCoreContractsStateRef';
import NetCordaCoreContractsTransactionStateNetCordaCoreContractsContractState from './NetCordaCoreContractsTransactionStateNetCordaCoreContractsContractState';

/**
 * The NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState model module.
 * @module io.generated.model/NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState
 * @version 1.0.0
 */
class NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState {
    /**
     * Constructs a new <code>NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState</code>.
     * @alias module:io.generated.model/NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState
     */
    constructor() { 
        
        NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState} The populated <code>NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState();

            if (data.hasOwnProperty('state')) {
                obj['state'] = NetCordaCoreContractsTransactionStateNetCordaCoreContractsContractState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('ref')) {
                obj['ref'] = NetCordaCoreContractsStateRef.constructFromObject(data['ref']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:io.generated.model/NetCordaCoreContractsTransactionStateNetCordaCoreContractsContractState} state
 */
NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState.prototype['state'] = undefined;

/**
 * @member {module:io.generated.model/NetCordaCoreContractsStateRef} ref
 */
NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState.prototype['ref'] = undefined;






export default NetCordaCoreContractsStateAndRefNetCordaCoreContractsContractState;

