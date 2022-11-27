/// <reference types="node" />
import { PropType } from 'vue';
import SlimSelect, { Events } from '../slim-select';
import Settings from '../slim-select/settings';
import { DataArrayPartial, Option } from '../slim-select/store';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string | string[] | undefined>;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<DataArrayPartial>;
    };
    settings: {
        type: PropType<Settings>;
    };
    events: {
        type: PropType<Events>;
    };
}, unknown, {
    slim: SlimSelect | null;
}, {
    value: {
        get(): string | string[];
        set(value: string | string[]): void;
    };
}, {
    getSlimSelect(): {
        selectEl: HTMLSelectElement;
        settings: {
            id: string;
            style: string;
            class: string[];
            isMultiple: boolean;
            isOpen: boolean;
            triggerFocus: boolean;
            intervalMove: {
                hasRef: () => boolean;
                refresh: () => NodeJS.Timeout;
                [Symbol.toPrimitive]: () => number;
                ref: () => NodeJS.Timeout;
                unref: () => NodeJS.Timeout;
            } | null;
            isEnabled: boolean;
            alwaysOpen: boolean;
            showSearch: boolean;
            searchPlaceholder: string;
            searchText: string;
            searchingText: string;
            searchHighlight: boolean;
            closeOnSelect: boolean;
            contentLocation: HTMLElement;
            contentPosition: "relative" | "absolute";
            openPosition: "auto" | "up" | "down";
            placeholderText: string;
            allowDeselect: boolean;
            hideSelected: boolean;
            showOptionTooltips: boolean;
            minSelected: number;
            maxSelected: number;
            timeoutDelay: number;
        };
        select: {
            select: HTMLSelectElement;
            listen: boolean;
            onSelectChange?: ((data: DataArrayPartial) => void) | undefined;
            onValueChange?: ((value: string[]) => void) | undefined;
            enable: () => void;
            disable: () => void;
            hideUI: () => void;
            showUI: () => void;
            changeListen: (on: boolean) => void;
            addSelectChangeListener: (func: (data: DataArrayPartial) => void) => void;
            removeSelectChangeListener: () => void;
            addValueChangeListener: (func: (value: string[]) => void) => void;
            removeValueChangeListener: () => void;
            valueChange: (ev: Event) => boolean;
            getData: () => DataArrayPartial;
            getDataFromOptgroup: (optgroup: HTMLOptGroupElement) => import("../slim-select/store").OptgroupOptional;
            getDataFromOption: (option: HTMLOptionElement) => Option;
            getSelectedValues: () => string[];
            setSelected: (value: string[]) => void;
            updateSelect: (id?: string | undefined, style?: string | undefined, classes?: string[] | undefined) => void;
            updateOptions: (data: import("../slim-select/store").DataArray) => void;
            createOptgroup: (optgroup: import("../slim-select/store").Optgroup) => HTMLOptGroupElement;
            createOption: (info: Option) => HTMLOptionElement;
            destroy: () => void;
        };
        store: {
            validateDataArray: (data: DataArrayPartial | import("../slim-select/store").DataArray) => Error | null;
            validateOption: (option: import("../slim-select/store").OptionOptional | Option) => Error | null;
            partialToFullData: (data: DataArrayPartial) => import("../slim-select/store").DataArray;
            setData: (data: DataArrayPartial | import("../slim-select/store").DataArray) => void;
            getData: () => import("../slim-select/store").DataArray;
            getDataOptions: () => Option[];
            addOption: (option: import("../slim-select/store").OptionOptional) => void;
            setSelectedBy: (selectedType: "value" | "id", selectedValues: string[]) => void;
            getSelected: () => string[];
            getSelectedOptions: () => Option[];
            getSelectedIDs: () => string[];
            getOptgroupByID: (id: string) => import("../slim-select/store").Optgroup | null;
            getOptionByID: (id: string) => Option | null;
            search: (search: string, searchFilter: (opt: Option, search: string) => boolean) => import("../slim-select/store").DataArray;
            filter: (filter: ((opt: Option) => boolean) | null, includeOptgroup: boolean) => import("../slim-select/store").DataArray;
        };
        render: {
            settings: {
                id: string;
                style: string;
                class: string[];
                isMultiple: boolean;
                isOpen: boolean;
                triggerFocus: boolean;
                intervalMove: {
                    hasRef: () => boolean;
                    refresh: () => NodeJS.Timeout;
                    [Symbol.toPrimitive]: () => number;
                    ref: () => NodeJS.Timeout;
                    unref: () => NodeJS.Timeout;
                } | null;
                isEnabled: boolean;
                alwaysOpen: boolean;
                showSearch: boolean;
                searchPlaceholder: string;
                searchText: string;
                searchingText: string;
                searchHighlight: boolean;
                closeOnSelect: boolean;
                contentLocation: HTMLElement;
                contentPosition: "relative" | "absolute";
                openPosition: "auto" | "up" | "down";
                placeholderText: string;
                allowDeselect: boolean;
                hideSelected: boolean;
                showOptionTooltips: boolean;
                minSelected: number;
                maxSelected: number;
                timeoutDelay: number;
            };
            store: {
                validateDataArray: (data: DataArrayPartial | import("../slim-select/store").DataArray) => Error | null;
                validateOption: (option: import("../slim-select/store").OptionOptional | Option) => Error | null;
                partialToFullData: (data: DataArrayPartial) => import("../slim-select/store").DataArray;
                setData: (data: DataArrayPartial | import("../slim-select/store").DataArray) => void;
                getData: () => import("../slim-select/store").DataArray;
                getDataOptions: () => Option[];
                addOption: (option: import("../slim-select/store").OptionOptional) => void;
                setSelectedBy: (selectedType: "value" | "id", selectedValues: string[]) => void;
                getSelected: () => string[];
                getSelectedOptions: () => Option[];
                getSelectedIDs: () => string[];
                getOptgroupByID: (id: string) => import("../slim-select/store").Optgroup | null;
                getOptionByID: (id: string) => Option | null;
                search: (search: string, searchFilter: (opt: Option, search: string) => boolean) => import("../slim-select/store").DataArray;
                filter: (filter: ((opt: Option) => boolean) | null, includeOptgroup: boolean) => import("../slim-select/store").DataArray;
            };
            callbacks: {
                open: () => void;
                close: () => void;
                addable?: ((value: string) => string | import("../slim-select/store").OptionOptional | Promise<string | import("../slim-select/store").OptionOptional>) | undefined;
                setSelected: (value: string[]) => void;
                addOption: (option: Option) => void;
                search: (search: string) => void;
                beforeChange?: ((newVal: Option[], oldVal: Option[]) => boolean | void) | undefined;
                afterChange?: ((newVal: Option[]) => void) | undefined;
            };
            main: {
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
            };
            content: {
                main: HTMLDivElement;
                search: {
                    main: HTMLDivElement;
                    input: HTMLInputElement;
                    addable?: {
                        main: HTMLDivElement;
                        svg: SVGSVGElement;
                        path: SVGPathElement;
                    } | undefined;
                };
                list: HTMLDivElement;
            };
            classes: {
                main: string;
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
                openAbove: string;
                openBelow: string;
                search: string;
                searchHighlighter: string;
                searching: string;
                addable: string;
                addablePath: string;
                list: string;
                optgroup: string;
                optgroupLabel: string;
                optgroupLabelText: string;
                optgroupActions: string;
                optgroupSelectAll: string;
                optgroupSelectAllBox: string;
                optgroupSelectAllCheck: string;
                optgroupClosable: string;
                option: string;
                optionDelete: string;
                highlighted: string;
                open: string;
                close: string;
                selected: string;
                error: string;
                disabled: string;
                hide: string;
            };
            enable: () => void;
            disable: () => void;
            open: () => void;
            close: () => void;
            mainDiv: () => import("../slim-select/render").Main;
            mainFocus: (trigger: boolean) => void;
            placeholder: () => HTMLDivElement;
            renderValues: () => void;
            multipleValue: (option: Option) => HTMLDivElement;
            contentDiv: () => import("../slim-select/render").Content;
            moveContent: () => void;
            searchDiv: () => import("../slim-select/render").Search;
            searchFocus: (trigger: boolean) => void;
            getOptions: (notPlaceholder?: boolean, notDisabled?: boolean, notHidden?: boolean) => HTMLDivElement[];
            highlight: (dir: "up" | "down") => void;
            listDiv: () => HTMLDivElement;
            renderError: (error: string) => void;
            renderSearching: () => void;
            renderOptions: (data: import("../slim-select/store").DataArray) => void;
            option: (option: Option) => HTMLDivElement;
            destroy: () => void;
            moveContentAbove: () => void;
            moveContentBelow: () => void;
            ensureElementInView: (container: HTMLElement, element: HTMLElement) => void;
            putContent: (el: HTMLElement, isOpen: boolean) => "up" | "down";
        };
        events: {
            search?: ((searchValue: string, currentData: import("../slim-select/store").DataArray) => DataArrayPartial | Promise<DataArrayPartial>) | undefined;
            searchFilter?: ((option: Option, search: string) => boolean) | undefined;
            addable?: ((value: string) => string | import("../slim-select/store").OptionOptional | Promise<string | import("../slim-select/store").OptionOptional>) | undefined;
            beforeChange?: ((newVal: Option[], oldVal: Option[]) => boolean | void) | undefined;
            afterChange?: ((newVal: Option[]) => void) | undefined;
            beforeOpen?: (() => void) | undefined;
            afterOpen?: (() => void) | undefined;
            beforeClose?: (() => void) | undefined;
            afterClose?: (() => void) | undefined;
            error?: ((err: Error) => void) | undefined;
        };
        enable: () => void;
        disable: () => void;
        getData: () => import("../slim-select/store").DataArray;
        setData: (data: DataArrayPartial) => void;
        getSelected: () => string[];
        setSelected: (value: string | string[]) => void;
        addOption: (option: import("../slim-select/store").OptionOptional) => void;
        open: () => void;
        close: () => void;
        search: (value: string) => void;
        destroy: () => void;
    } | null;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<string | string[] | undefined>;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<DataArrayPartial>;
    };
    settings: {
        type: PropType<Settings>;
    };
    events: {
        type: PropType<Events>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    multiple: boolean;
}>;
export default _default;
