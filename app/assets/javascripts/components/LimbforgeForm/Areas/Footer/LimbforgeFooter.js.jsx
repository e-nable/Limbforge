class LimbforgeFooter extends React.Component {
  render() {
    var loadinggif = this.props.isLoading ? <img className="loading-gif" src={this.props.loadingImg}/> : '';
    return(
      <div>
        <div id="display-hand"></div>
        <div id="limbforge-links">
          {loadinggif}
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd7jnjVV9gu4BlkiLRc86XAT-kDcJJNXdTm-EHzUSVH8vONdA/viewform">
            <button id="input" type="button">Have Feedback?</button>
          </a>
        </div>
      </div>
    )
  }
};
