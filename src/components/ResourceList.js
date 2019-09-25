import React, { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
    })(resource);
  }, [resource]);
  return resources;
};

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

// CLASS BASED COMPONENT
// class ResourceList extends Component {
//     state = { resources: [] };

//     async componentDidMount() {
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/${this.props.resource}`
//         );
//         this.setState({ resources: response.data });
//     }

//     async componentDidUpdate(prevProsp) {
//         if (prevProsp.resource !== this.props.resource) {
//             const response = await axios.get(
//                 `https://jsonplaceholder.typicode.com/${this.props.resource}`
//             );
//             this.setState({ resources: response.data });
//         }
//     }

//     render() {
//         return <div>{this.state.resources.length}</div>;
//     }
// }

export default ResourceList;
