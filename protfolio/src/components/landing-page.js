import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className="avatar-image" src="https://scontent.fagc1-1.fna.fbcdn.net/v/t1.0-9/75231854_156651205540844_6574373342692769792_o.jpg?_nc_cat=110&_nc_oc=AQniMjTNS8A5J-kwGG7kozFVGnzDJ7OEBNdZqidQIpeXNx3AUV9iugHVQEMYPDbfTjBJv-GFV_aEWO_YbVGJVVm5&_nc_ht=scontent.fagc1-1.fna&oh=c38e6a8aa9ecd40fbbcfe62e90bdf9cb&oe=5E5554C9" alt="avatar"/>
                        <div className="banner-text">
                            <h1>Enthusiastic Hacker</h1>
                        <hr/>


                        <p>Python | R | Golang | JavaScript | MySQL | Django | React | Flutter | Machine Learning | Deep Learning</p>
                        {/* LinkedIn */}
                        <div className="social-links">
                        <a href="https://www.linkedin.com/in/tianqin-li-b16299170/" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="https://github.com/Crazy-Jack" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                        {/* University */}
                        <a href="https://www.cmu.edu/" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-university" aria-hidden="true" />
                        </a>
                        </div>



                        </div>



                    </Cell>


                </Grid>


            </div>
        )
    }
}


export default LandingPage;
