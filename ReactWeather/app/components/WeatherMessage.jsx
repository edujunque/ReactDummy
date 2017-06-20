var React = require('react');

var CityMessage = React.createClass({
  render: function(){
    var {location,temp} = this.props;

    return(
      <div>
        <p>it's it {temp} in {location}</p>
      </div>
    );
  }
});

module.exports = CityMessage;
