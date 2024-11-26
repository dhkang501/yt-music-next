import React from 'react';

interface ChannelPageProps {
  params: {
    id: string;
  };
}

const page = props => {
  console.log(props.id);
  return <div>channel{props.params.id}</div>;
};

export default page;
