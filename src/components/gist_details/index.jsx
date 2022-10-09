import React, { memo } from "react";
import PropTypes from "prop-types";
import classes from "src/components/gist_details/index.module.css";

function GistDetails({ loading, data }) {
  if (loading) {
    return (
      <div>
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  return (
    <div key={data?.id} className={classes.card}>
      <div className={classes.justfySpaceBetween}>
        <div className={classes.box}>
          <Avatar imageUrl={data?.owner?.avatar_url} name={data?.owner?.login} />
          <p className={classes.title}>{data?.owner?.login}</p>
        </div>

        <ul className={classes.dInlineBlock}>
          {Object.values(data?.files).map((el) => (
            <li className={`${classes.badge} list-unstyle`}>{el?.language}</li>
          ))}
        </ul>
      </div>
      <hr />

      <p className={classes.description}>
        Description: <span className={classes.normalText}>{data?.description || "No Description"}</span>
      </p>

      <Files files={data?.files} />
      <Forks forks={data?.forks} />
    </div>
  );
}

const Avatar = ({ imageUrl, name }) => <img className={classes.avatar} src={imageUrl} alt={name} />;

const Files = ({ files }) => {
  return (
    <div className={classes.box}>
      <p className={classes.subTitle}>Files:</p>
      <ul className={classes.dInlineBlock}>
        {Object.values(files).map((el) => (
          <li className={`list-unstyle ${classes.file}`}>
            <a href={el?.raw_url} target="_blank">
              {el?.filename}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Forks = ({ forks }) => {
  return (
    <div className={classes.box}>
      <p className={classes.subTitle}>Forks:</p>
      {forks?.length > 0 ? (
        <ul className={classes.dInlineBlock}>
          {forks?.slice(0, 3)?.map((el) => (
            <li className={`list-unstyle ${classes.dInlineBlock} ${classes.avatarBox}`}>
              <Avatar imageUrl={el?.user?.avatar_url} name={el?.user?.login} />
              <a href={`https://gist.github.com/${el.id}`} target="_blank">
                {el?.user?.login}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={classes.dInlineBlock}>No Forks</p>
      )}
    </div>
  );
};

Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

GistDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default memo(GistDetails);
