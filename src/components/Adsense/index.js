import React, { Component } from 'react';

export default class GoogleAd extends Component {
  componentDidMount() {
    (window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-7472727658318966",
      enable_page_level_ads: true
    });
  }

  render() {
    return (
      <div> 
      </div>
    );
  }
}