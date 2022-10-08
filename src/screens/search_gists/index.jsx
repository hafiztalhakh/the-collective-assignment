import SearchInput from "src/components/search_bar";
import classes from "src/screens/search_gists/index.module.css";

export default function SearchGist() {
  return (
    <div>
      <div className={classes.box}>
        <SearchInput />
      </div>
    </div>
  );
}
