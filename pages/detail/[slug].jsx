import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Header from "../../components/detail-header";
import CamblyConstants from "../../src/constant/index";
import { useRouter } from "next/router";
import styles from "../../src/assets/common/style.module.scss";
import Video from "../../components/tutor-video";
import Personality from "../../components/personality-info";

function Detail({}) {
  const router = useRouter();
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setTutor(
        CamblyConstants.TUTORS.filter((e) => e.id == router.query.slug)[0]
      );
    }
  }, [router.isReady]);

  useEffect(() => {
    console.log(tutor);
  }, [tutor]);

  return (
    <div>
      <Layout>
        <main className={styles.detailMain}>
          {tutor !== null && (
            <>
              <Header
                name={tutor.name}
                badge={tutor.badge}
                location={tutor.location}
                avatar={tutor.avatar}
              />
              <Video video={tutor.video} />
              <Personality about={tutor.about} language={tutor.languages} />
            </>
          )}
        </main>
      </Layout>
    </div>
  );
}

export default Detail;
