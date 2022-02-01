import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Row from "../../components/row";
import Col from "../../components/col";
import Header from "../../components/detail-header";
import CamblyConstants from "../../src/constant/index";
import { useRouter } from "next/dist/client/router";
import styles from "../../src/assets/common/style.module.scss";

function Detail() {
  const router = useRouter();
  const [tutor, setTutor] = useState(CamblyConstants.TUTORS);
  const [tutorInfo, setTutorInfo] = useState("");

  useEffect(() => {
    setTutor(CamblyConstants.TUTORS.filter((e) => e.slug == router.query.slug));
    tutor.map((a) => setTutorInfo(a));

    console.log(router)
  }, []);

  return (
    <div>
      <Layout>
        <section className={styles.headerWrapper}>
          <Container>
            <Row>
              <Col>
                <Header name={tutorInfo.name} badge={tutorInfo.badge} location={tutorInfo.location} avatar={tutorInfo.avatar} />
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </div>
  );
}

export default Detail;
