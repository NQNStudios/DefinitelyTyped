// Type definitions for quick.db 6.3
// Project: https://github.com/TrueXPixels/quick.db#readme
// Definitions by: Nat Quayle Nelson <https://github.com/NQNStudios>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type OptionsWithTarget = {
    target?: string;
    table?: string;
};
type DataArray = Array<{ID: string, data: any}>;

export function createWebview(password: string, port?: number): undefined;
export function set(ID: string, data: any, options?: OptionsWithTarget): Promise<any>;
export function fetch(ID: string, options?: OptionsWithTarget): Promise<any>;
export function fetchAll(options?: { table?: string }): Promise<DataArray>;
export function startsWith(text: string, options?: { sort?: string, table?: string }): Promise<DataArray>;
export function delete(ID: string, options?: { table?: string }): Promise<boolean>;
export function add(ID: string, value: number, options?: OptionsWithTarget): Promise<any>;
export function subtract(ID: string, value: number, options?: OptionsWithTarget): Promise<any>;
export function push(ID: string, data: any, options?: OptionsWithTarget): Promise<any>;

// TODO table class
