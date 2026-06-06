import styles from './Quality.module.css';

export default function Quality() {
  return (
    <section className={styles.quality} id="quality">
      <div className="wrap">
        <div className={styles.header}>
          <div>
            <span className={styles.sectionNum}>04 — Quality &amp; Compliance</span>
            <h2 className={styles.headline}>Compliance is the operating system, not a department.</h2>
          </div>
          <div className={styles.headerRight}>
            <p>
              Three regulatory blocks anchor Altanova's public Quality &amp; Compliance posture. Each is published on this site, with a primary-source citation, and is supported by the corresponding policy PDF in the Resources section.
            </p>
          </div>
        </div>

        <div className={styles.blocks}>
          <article className={styles.block}>
            <span className={styles.blockNum}>Block 1 · Manufacturing &amp; GMP</span>
            <h3>EU-GMP Annex 16 release.</h3>
            <p>Altanova operates a Swissmedic-aligned manufacturing and release framework under EU-GMP standards, mutually recognised by the European Union under the EU–Switzerland Mutual Recognition Agreement. Each batch is released by our Qualified Person in accordance with EU-GMP Annex 16.</p>
            <p className={styles.citation}>Citation: Art. 5–7 AMBV · EU-CH MRA</p>
          </article>
          <article className={styles.block}>
            <span className={styles.blockNum}>Block 2 · Narcotics handling</span>
            <h3>Art. 4 BetmG framework.</h3>
            <p>The cultivation, manufacture, distribution and dispensing of medicinal cannabis in Switzerland is governed by the Federal Act on Narcotic Drugs and Psychotropic Substances (BetmG) and the Narcotics Control Ordinance (BetmKV). Altanova believes in the strict separation between medicinal cannabis and cannabis for recreational use.</p>
            <p className={styles.citation}>Citation: Art. 4 BetmG · BetmKV</p>
          </article>
          <article className={styles.block}>
            <span className={styles.blockNum}>Block 3 · Pharmacovigilance</span>
            <h3>ElViS-aligned reporting.</h3>
            <p>Healthcare professionals and patients are asked to report any suspected adverse reactions to Altanova at <a href="mailto:pharmacovigilance@altanovapharma.ch">pharmacovigilance@altanovapharma.ch</a>, or directly to Swissmedic through the ElViS electronic vigilance system. Social-media channels are not a forum for adverse-event reporting.</p>
            <p className={styles.citation}>Citation: Art. 59 HMG · Swissmedic ElViS</p>
          </article>
        </div>
      </div>
    </section>
  );
}
