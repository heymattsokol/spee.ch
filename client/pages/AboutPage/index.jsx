import React from 'react';
import NavBar from 'containers/NavBar';
import SEO from 'components/SEO';

class AboutPage extends React.Component {
  render () {
    return (
      <div>
        <SEO pageTitle={'About'} pageUri={'about'} />
        <NavBar />
        <div className='row row--padded'>
          <div className='column column--5 column--med-10 align-content-top'>
            <div className='column column--8 column--med-10'>
              <p className='pull-quote'>Spee.ch is an open-source project.  Please contribute to the existing site, or fork it and make your own.</p>
              <p><a className='link--primary' target='_blank' href='https://twitter.com/spee_ch'>TWITTER</a></p>
              <p><a className='link--primary' target='_blank' href='https://github.com/lbryio/spee.ch'>GITHUB</a></p>
              <p><a className='link--primary' target='_blank' href='https://discord.gg/YjYbwhS'>DISCORD CHANNEL</a></p>
              <p><a className='link--primary' target='_blank' href='https://github.com/lbryio/spee.ch/blob/master/README.md'>DOCUMENTATION</a></p>
            </div>
          </div><div className='column column--5 column--med-10 align-content-top'>
            <div className='column column--8 column--med-10'>
              <h3>What is spee.ch?</h3>
              <p>Spee.ch is a media-hosting site that reads from and publishes content to the <a className='link--primary' href='https://lbry.io'>LBRY</a> blockchain.</p>
              <h3>OK But Why Should I Care?</h3>
              <p>Spee.ch is a fast and easy way to host your images, videos, and other content. You’ll retain full control and ownership of your content, and you remain as anonymous as you want to be.</p>
              <p>What makes this different from other similar sites is that Speech is hosted on the LBRY blockchain. That means it is impossible for your content to be censored via digital means. Even if we took down Speech today, all content would remain immutably stored on the LBRY blockchain.</p>
              <p>Blockchain technology doesn’t solve <a className='link--primary' href='https://xkcd.com/538/'>the 5 dollar wrench attack</a>, but it solves just about every other problem in media hosting and distribution.</p>
              <p>Even better - you can host your own clone of Speech to get even more control over your content. <a className='link--primary' href='https://github.com/lbryio/spee.ch/blob/master/README.md'>CLICK HERE FOR INFO</a></p>
              <p>Speech is just the beginning of what will soon be a vibrant ecosystem of LBRY-powered apps. Use LBRY and you’re one step closer to true freedom.</p>
              <h3>How to Use spee.ch</h3>
              <p>It’s easy. Drag the image or video file of your choice into the center of the spee.ch homepage.</p>
              <p>If you want to refer to a piece of content repeatedly, or to build a collection of related content, you could create a channel. Channels work both for private collections and for public repositories. There’s more info about how to do this <a className='link--primary' href='https://spee.ch/login'>on the channel page</a>.</p>
              <h3>How Long Does Content Stay on Speech?</h3>
              <p>All content uploaded on spee.ch is guaranteed to stay up for at least 10 years with no maintenance. Future updates will likely extend that time horizon further as blockchain technology improves.</p>
              <h3>Contribute</h3>
              <p>If you have an idea for your own spee.ch-like site on top of LBRY, fork our <a className='link--primary' href='https://github.com/lbryio/spee.ch'>github repo</a> and go to town!</p>
              <p>If you want to improve spee.ch, join our <a className='link--primary' href='https://discord.gg/YjYbwhS'>discord channel</a> or solve one of our <a className='link--primary' href='https://github.com/lbryio/spee.ch/issues'>github issues</a>.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AboutPage;
