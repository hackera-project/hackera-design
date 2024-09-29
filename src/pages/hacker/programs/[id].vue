<script lang="ts" setup>
const headers = [
  { title: 'Type', key: 'type' },
  { title: 'Value', key: 'value' },
  { title: 'Max severity', key: 'max_severity' },
]

const items = [
  { type: 'source code', value: 'https://github.com/contentauth/c2pa-js', max_severity: 4 },
  { type: 'Google play id', value: 'com.hotwire.hotels', max_severity: 3 },
  { type: 'App Store id', value: '427916203', max_severity: 3 },
]

const content = ref('<h1>Bug Bounty Program</h1><p><br class="ProseMirror-trailingBreak"></p><p>We are committed to ensuring the security and privacy of our users. To achieve this, we welcome security researchers to participate in our Bug Bounty Program by identifying vulnerabilities in our systems. We appreciate the community\'s contributions to maintaining a safe and secure environment for everyone.</p><p><br class="ProseMirror-trailingBreak"></p><h2>Scope</h2><p><br class="ProseMirror-trailingBreak"></p><p>The following areas are in scope for our Bug Bounty Program:</p><ul><li><p><strong>Website</strong>: <code>www.example.com</code></p></li><li><p><strong>API</strong>: <code>api.example.com</code></p></li><li><p><strong>Mobile Applications</strong>: iOS and Android versions</p></li><li><p><strong>Other Assets</strong>: Any publicly accessible domain or subdomain owned by us</p></li></ul><h3>Out of Scope</h3><ul><li><p>Denial of Service (DOS) attacks</p></li><li><p>Social engineering attacks (including phishing)</p></li><li><p>Vulnerabilities requiring physical access</p></li><li><p>Issues in third-party services not owned by us</p></li></ul><h2>Eligibility</h2><p>To be eligible for a reward, you must:</p><ul><li><p>Be the first to report a specific vulnerability.</p></li><li><p>Report a vulnerability that is within scope and has a valid impact on our systems.</p></li><li><p>Provide a clear, reproducible proof of concept (PoC).</p></li></ul><h2>Rewards</h2><p>Rewards are determined based on the severity of the vulnerability as classified by our team. The reward amounts are as follows:</p><ul><li><p><strong>Critical</strong>: $5,000 - $10,000</p></li><li><p><strong>High</strong>: $1,000 - $5,000</p></li><li><p><strong>Medium</strong>: $500 - $1,000</p></li><li><p><strong>Low</strong>: $100 - $500</p></li></ul><h2>Submission Guidelines</h2><ul><li><p>Submit detailed information including steps to reproduce, screenshots, and any relevant scripts.</p></li><li><p>Use our [Bug Report Form](#) to submit your findings.</p></li><li><p>Include your contact information for follow-up.</p></li></ul><p>## Response Targets</p><p>We aim to meet the following response targets for vulnerabilities:</p><p>- <strong>Time to First Response</strong>: 3 business days</p><p>- <strong>Time to Triage</strong>: 7 business days</p><p>- <strong>Time to Bounty</strong>: Varies based on severity and complexity</p><p>## Disclosure Policy</p><p>- You must give us reasonable time to resolve the issue before publicly disclosing it.</p><p>- We encourage responsible disclosure, and unauthorized disclosure will disqualify you from receiving any reward.</p><p>## Legal</p><p>- By participating in our Bug Bounty Program, you agree to abide by all program rules.</p><p>- Any attempt to harm, disrupt, or compromise our systems or data will result in disqualification and potential legal action.</p><p>Thank you for helping us keep our platform safe and secure!</p><p>---</p><p><em>Last updated: [Date]</em></p><p><br class="ProseMirror-trailingBreak"></p>')
</script>

<template>
  <VRow>
    <VCol cols="9">
      <VCard :title="$t('payments')">
        <VCardText>
          <VRow>
            <VCol cols="3">
              <div class="text-h5 text-error">
                Critical
              </div>
              <div>
                800 - 1000
              </div>
            </VCol>
            <VCol cols="3">
              <div class="text-h5 text-error">
                High
              </div>
              <div>
                800 - 1000
              </div>
            </VCol>
            <VCol cols="3">
              <div class="text-h5 text-warning">
                Medium
              </div>
              <div>
                600 - 800
              </div>
            </VCol>
            <VCol cols="3">
              <div class="text-h5 text-info">
                Low
              </div>
              <div>
                0 - 400
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>

      <VCard
        :title="$t('assets')"
        class="mt-4"
      >
        <VCardText>
          <VDataTable
            :headers
            :items
            hide-default-footer
          />
        </VCardText>
      </VCard>

      <VCard
        :title="$t('description')"
        class="mt-4"
      >
        <VCardText>
          <TextEditor
            v-model="content"
            preview
          />
        </VCardText>
      </VCard>
      <VCard
        :title="$t('program-exclusions')"
        class="mt-4"
      >
        <VCardText>
          <TextEditor
            v-model="content"
            preview
          />
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="3">
      <VCard>
        <VCardText class="d-flex flex-column align-center">
          <div class="mb-4">
            Do you want to sent a report?
          </div>
          <VBtn>
            submit a report
          </VBtn>
        </VCardText>
      </VCard>

      <VCard class="mt-4 bg-background">
        <VCardText>
          Some metrics should be here. We need to talk about it for future phases.
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
