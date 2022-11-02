import NextLink from "next/link";

export default function Link({ onClick, children, ...rest }) {
  let clickHandler = onClick;
  if (!clickHandler) {
    const shouldAddOnClick = true;

    if (shouldAddOnClick) {
      clickHandler = () => {
        console.log("CLICKED");
    }
  }

  return (
    <NextLink {...rest} passHref>
      <a
        onClick={
          clickHandler
            ? (e) => {
                e.preventDefault();
                clickHandler();
              }
            : undefined
        }
      >
        {children}
      </a>
    </NextLink>
  );
    }
}