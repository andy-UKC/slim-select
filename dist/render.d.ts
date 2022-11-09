import Settings from './settings';
import Store, { DataArray, Option, OptionOptional } from './store';
export interface Callbacks {
    open: () => void;
    close: () => void;
    addable?: (value: string) => OptionOptional | string;
    setSelected: (value: string[], close: boolean) => void;
    addOption: (option: Option) => void;
    search: (search: string) => void;
    beforeChange?: (newVal: Option[], oldVal: Option[]) => boolean | void;
    afterChange?: (newVal: Option[]) => void;
}
export interface Main {
    main: HTMLDivElement;
    values: HTMLDivElement;
    deselect: {
        main: HTMLDivElement;
        svg: SVGSVGElement;
        path: SVGPathElement;
    };
    arrow: {
        main: SVGSVGElement;
        path: SVGPathElement;
    };
}
export interface Content {
    main: HTMLDivElement;
    search: Search;
    list: HTMLDivElement;
}
export interface Search {
    main: HTMLDivElement;
    input: HTMLInputElement;
    addable?: {
        main: HTMLDivElement;
        svg: SVGSVGElement;
        path: SVGPathElement;
    };
}
export default class Render {
    settings: Settings;
    store: Store;
    callbacks: Callbacks;
    main: Main;
    content: Content;
    classes: {
        main: string;
        openAbove: string;
        openBelow: string;
        placeholder: string;
        values: string;
        single: string;
        value: string;
        valueText: string;
        valueDelete: string;
        valueOut: string;
        deselect: string;
        deselectPath: string;
        arrow: string;
        arrowClose: string;
        arrowOpen: string;
        content: string;
        open: string;
        search: string;
        searchHighlighter: string;
        searching: string;
        addable: string;
        addablePath: string;
        list: string;
        optgroup: string;
        optgroupLabel: string;
        optgroupSelectable: string;
        option: string;
        optionSelected: string;
        optionDelete: string;
        highlighted: string;
        error: string;
        disabled: string;
        hide: string;
    };
    constructor(settings: Required<Settings>, store: Store, callbacks: Callbacks);
    enable(): void;
    disable(): void;
    open(): void;
    close(): void;
    mainDiv(): Main;
    placeholder(): HTMLDivElement;
    renderValues(): void;
    private renderSingleValue;
    private renderMultipleValues;
    multipleValue(option: Option): HTMLDivElement;
    contentDiv(): Content;
    moveContent(): void;
    searchDiv(): Search;
    highlightUp(): void;
    highlightDown(): void;
    listDiv(): HTMLDivElement;
    renderError(error: string): void;
    renderSearching(): void;
    renderOptions(data: DataArray): void;
    option(option: Option): HTMLDivElement;
    destroy(): void;
    private highlight;
    moveContentAbove(): void;
    moveContentBelow(): void;
    ensureElementInView(container: HTMLElement, element: HTMLElement): void;
    putContent(el: HTMLElement, isOpen: boolean): 'up' | 'down';
}