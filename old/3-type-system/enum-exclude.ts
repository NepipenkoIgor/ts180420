export enum MeterGeneralActionType {
    RmdConnect = 'Reconnect',
    RmdDisconnect = 'Disconnect',
}

export enum MeterGroupActionType {
    InsertGroup = 'New Group',
    AddToGroup = 'Add To Group',
}

export enum MeterTaskActionType {
    InitiateBaseSwap = 'Initiate Base Swap',
    InitiateRegisterSwap = 'Initiate Register Swap',
}

export type  MeterActionsTypes = MeterGeneralActionType | MeterGroupActionType | MeterTaskActionType;

const meterActionTypeDD = {
    General: MeterGeneralActionType,
    Group: MeterGroupActionType,
    Tasks: MeterTaskActionType,
}

function performMeterActions({name: action}: { name: MeterActionsTypes }) {
    let swapType: number | null = null;
    switch (action) {
        case MeterTaskActionType.InitiateBaseSwap: {
            swapType = 1;
            //
            return
        }
        case MeterTaskActionType.InitiateRegisterSwap: {
            swapType = 0;
            //
            return
        }
    }
    componentLookup(action);
}

function componentLookup(_type: Exclude<MeterActionsTypes, MeterTaskActionType>) {

}
