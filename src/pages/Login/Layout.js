import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Message,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./style.css";
import loginImage from "../../assets/imgs/logo.png";

const Layout = ({error, onChange, onSubmit, form, loading, loginFormValid}) => {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="orange" textAlign="center">
          <Image src={loginImage} /> Login DIM
        </Header>
        <Form size="large">
          <Segment id="segmentLogin" stacked>
            {!!error && <Message id="messageLogin" content={error.detail} negative />}
            <Form.Input
              value={form.username || ""}
              onChange={onChange}
              name="username"
              id="inputLogin"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Usuario"
            />

            <Form.Input
              value={form.password || ""}
              onChange={onChange}
              name="password"
              id="inputLogin"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button
              onClick={onSubmit}
              type="submit"
              color="orange"
              fluid
              size="large"
              disabled={loginFormValid || loading}
              loading={loading}
            >
              Ingresar
            </Button>
          </Segment>
        </Form>
        <Message id="messageLogin" info>
          No estas Registrado?&nbsp;
          <a href="https://www.youtube.com/watch?v=EsKCqxihois">
            Contactar Help Desk
          </a>
          &nbsp;
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Layout;
