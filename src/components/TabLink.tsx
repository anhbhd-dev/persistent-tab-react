import { Link, LinkProps } from "react-router-dom";
import { forwardRef, useCallback } from "react";
import { useTabContext } from "@/contexts/TabContext";

interface TabLinkProps extends LinkProps {
  tabTitle: string;
  tabId?: string;
}

const TabLink = forwardRef<HTMLAnchorElement, TabLinkProps>(
  ({ tabTitle, tabId, to, onClick, ...props }, ref) => {
    const { openTab } = useTabContext();

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        const path = typeof to === 'string' ? to : to.pathname || '/';
        const id = tabId || path.replace(/\//g, '') || 'home';
        
        openTab({
          id,
          title: tabTitle,
          path,
        });

        onClick?.(e);
      },
      [to, tabId, tabTitle, openTab, onClick]
    );

    return <Link ref={ref} to={to} onClick={handleClick} {...props} />;
  }
);

TabLink.displayName = "TabLink";

export { TabLink };
