export interface ACPower {
    activePower_W: number;
    reactivePower_var: number;
    apparentPower_VA: number;
    voltageRMS_V: number;
    currentRMS_A: number;
    powerFactor: number;
};

export interface Measurement {
    title: string;
    unit: string;
    key: keyof ACPower;
    decimals: number;
};