import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabButton = () => {
    updateActiveTabItem(tabId)
  }

  const applyStylingTabItem = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${applyStylingTabItem}`}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
