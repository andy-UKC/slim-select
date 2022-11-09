import { generateID } from './helper'

export type SettingsPartial = Partial<Settings>

export default class Settings {
  public id: string = '' // Primary ID for the select
  public style: string = '' // Style attribute from the select element
  public class: string[] = [] // Class attribute from the select element

  // Dynamic settings
  public isMultiple: boolean = false
  public isOpen: boolean = false
  public isTabbing: boolean = false

  // Fields set from constructor
  public isEnabled: boolean
  public showSearch: boolean
  public searchPlaceholder: string
  public searchText: string
  public searchingText: string
  public searchHighlight: boolean
  public closeOnSelect: boolean
  public contentLocation: HTMLElement
  public contentPosition: 'auto' | 'up' | 'down'
  public placeholderText: string
  public allowDeselect: boolean
  public hideSelected: boolean
  public useHtml: boolean
  public showOptionTooltips: boolean
  public selectByGroup: boolean
  public minSelected: number
  public maxSelected: number
  public timeoutDelay: number

  constructor(settings?: SettingsPartial) {
    if (!settings) {
      settings = {}
    }

    this.id = 'ss-' + generateID()
    this.style = settings.style || ''
    this.class = settings.class || []

    this.isEnabled = settings.isEnabled !== undefined ? settings.isEnabled : true
    this.showSearch = settings.showSearch !== undefined ? settings.showSearch : true
    this.searchPlaceholder = settings.searchPlaceholder || 'Search'
    this.searchText = settings.searchText || 'No Results'
    this.searchingText = settings.searchingText || 'Searching...'
    this.searchHighlight = settings.searchHighlight !== undefined ? settings.searchHighlight : false
    this.closeOnSelect = settings.closeOnSelect !== undefined ? settings.closeOnSelect : true
    this.contentLocation = settings.contentLocation || document.body
    this.contentPosition = settings.contentPosition || 'auto' // options: auto, up, down
    this.placeholderText = settings.placeholderText || 'Select Value'
    this.allowDeselect = settings.allowDeselect !== undefined ? settings.allowDeselect : false
    this.hideSelected = settings.hideSelected !== undefined ? settings.hideSelected : false
    this.useHtml = settings.useHtml !== undefined ? settings.useHtml : false
    this.showOptionTooltips = settings.showOptionTooltips !== undefined ? settings.showOptionTooltips : false
    this.selectByGroup = settings.selectByGroup !== undefined ? settings.selectByGroup : false
    this.minSelected = settings.minSelected || 0
    this.maxSelected = settings.maxSelected || 1000
    this.timeoutDelay = settings.timeoutDelay || 200
  }
}