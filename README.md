# NamasteReact



1.

To create nested routes in React Router DOM, you can use the Route component and nest it inside another Route component to define a child route. Here is an example:

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <Switch>
        <Route exact path="/products" component={AllProducts} />
        <Route path="/products/:productId" component={ProductDetail} />
      </Switch>
    </div>
  );
}

function AllProducts() {
  return <h3>All Products</h3>;
}

function ProductDetail({ match }) {
  const { productId } = match.params;
  return <h3>Product Detail: {productId}</h3>;
}

function Home() {
  return <h2>Home</h2>;
}

In this example, we define two routes at the top level, one for the home page and one for the products page. Then, we define a child route for the products page inside the Products component. The child route includes two routes for the "All Products" page and the product detail page. The ProductDetail component uses the match prop to get the productId from the URL.

Note that the child routes are defined inside the Products component, which means they will be rendered in place of the Products component when the corresponding URL is matched. You can also use the Link component to create links to these nested routes, for example:


import { Link } from 'react-router-dom';

function AllProducts() {
  return (
    <div>
      <h3>All Products</h3>
      <ul>
        <li><Link to="/products/1">Product 1</Link></li>
        <li><Link to="/products/2">Product 2</Link></li>
      </ul>
    </div>
  );
}
In this example, we use the Link component to create links to the product detail pages using the productId parameter.
