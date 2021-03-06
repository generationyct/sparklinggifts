/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Hero } from "../components"
import "normalize.css"

const Layout = ({ children, hasHero }) => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Styled.root>
      <Header siteTitle={title} />
      {hasHero ? <Hero title={title} description={description} /> : null}
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: 3,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer sx={{ mt: 6 }}>
          <Styled.p>
            © {new Date().getFullYear()} {title}, Built by
            {` `}
            <Styled.a href="https://appsi.nl">Appsi</Styled.a> for faster
            webshops.
          </Styled.p>
        </footer>
      </div>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
