import Link from "next/link";
import { Breadcrumbs as Breadcrumb, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

interface PropsType {
  crumbs: string[];
}

export default function Breadcrumbs({ crumbs }: PropsType) {
  return (
    <Breadcrumb aria-label="breadcrumbs" sx={{ mb: 2 }}>
      <Link href="/" style={{ display: "flex" }}>
        <HomeIcon
          fontSize="small"
          sx={{
            "&:hover": {
              color: "primary.accent",
            },
          }}
        />
      </Link>
      {crumbs &&
        crumbs.map((crumb, index) => {
          if (crumbs.length - 1 !== index) {
            return (
              <Link href={crumb} key={index}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "primary.accent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {crumb[0].toUpperCase() + crumb.slice(1)}
                </Typography>
              </Link>
            );
          }
          return (
            <Typography key={index}>
              {crumb[0].toUpperCase() + crumb.slice(1)}
            </Typography>
          );
        })}
    </Breadcrumb>
  );
}
