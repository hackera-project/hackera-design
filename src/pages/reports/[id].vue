<script lang="ts" setup>
const content = ref('<h2>1. Summary</h2><p><strong>Vulnerability Type:</strong> Cross-Site Scripting (XSS)<br><strong>Severity:</strong> High<br><strong>Reported By:</strong> [Your Name] - [Your Email]</p><h2>2. Description</h2><p>A Cross-Site Scripting (XSS) vulnerability was found on the login page of `www.example.com`. This vulnerability allows an attacker to inject malicious scripts into the page, potentially leading to user data theft and account compromise.</p><h2>3. Steps to Reproduce</h2><ol><li>Navigate to the login page at <a href="https://www.example.com/login">https://www.example.com/login</a>.</li><li>Enter the following payload in the username field:</li><pre>&lt;script&gt;alert(\'XSS Vulnerability Detected\')&lt;/script&gt;</pre><li>Click the "Login" button.</li><li>Observe that the injected script executes, confirming the presence of XSS.</li></ol><h2>4. Impact</h2><p>This vulnerability allows attackers to execute arbitrary JavaScript in the context of the user’s browser, which could lead to session hijacking, data theft, and other security breaches.</p><h2>5. Suggested Mitigation</h2><p>It is recommended to implement proper input validation and output encoding to prevent script injection. Use libraries like DOMPurify to sanitize user inputs.</p><h2>6. Proof of Concept (PoC)</h2><p>The following screenshot shows the script execution:</p><img src="screenshot.png" alt="XSS PoC Screenshot"><h2>7. Environment Details</h2><p><strong>Browser:</strong> Google Chrome 92.0.4515.159<br><strong>Operating System:</strong> Windows 10</p><h2>8. References</h2><ul><li><a href="https://owasp.org/www-community/attacks/xss/">OWASP XSS</a> - Comprehensive guide on Cross-Site Scripting.</li></ul><h2>9. Contact Information</h2><p><strong>Name:</strong> [Your Name]<br><strong>Email:</strong> [Your Email]</p>')

const show = ref(true)
</script>

<template>
  <VRow>
    <VCol cols="8">
      <div>
        <VCard>
          <template #title>
            <div class="d-flex justify-space-between align-center">
              <div class="text-h4">
                report title (program title)
              </div>
              <VBtn
                icon
                variant="text"
                @click="() => show = !show"
              >
                <VIcon
                  icon="tabler-chevron-down"
                  style="transition: ease 0.5s all;"
                  :style="show ? 'transform: rotate(180deg)' : ''"
                />
              </VBtn>
            </div>
          </template>

          <VExpandTransition>
            <VCardText v-show="show">
              <TextEditor
                v-model="content"
                preview
              />
            </VCardText>
          </VExpandTransition>
        </VCard>

        <VRow class="mt-4">
          <VCol cols="7">
            <VCard>
              <template #title>
                <div class="d-flex justify-space-between align-center">
                  <div class="d-flex align-center ga-2">
                    <VAvatar>
                      <VImg src="data:image/jpeg;base64,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" />
                    </VAvatar>
                    <div>
                      sender name
                    </div>
                  </div>

                  <div class="text-body-1">
                    2024-08-23 19:34
                  </div>
                </div>
              </template>
              <VCardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat maxime vitae minus. Voluptates porro incidunt eum et quo perferendis nesciunt eveniet consequatur commodi dolores, doloremque magnam perspiciatis accusamus! Necessitatibus.
              </VCardText>
            </VCard>
          </VCol>
        </VRow>

        <VRow
          justify="end"
          class="mt-4"
        >
          <VCol cols="7">
            <VCard>
              <template #title>
                <div class="d-flex justify-space-between align-center">
                  <div class="d-flex align-center ga-2">
                    <VAvatar>
                      <VImg src="data:image/jpeg;base64,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" />
                    </VAvatar>
                    <div>
                      receiver name
                    </div>
                  </div>

                  <div class="text-body-1">
                    2024-08-23 19:34
                  </div>
                </div>
              </template>
              <VCardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat maxime vitae minus. Voluptates porro incidunt eum et quo perferendis nesciunt eveniet consequatur commodi dolores, doloremque magnam perspiciatis accusamus! Necessitatibus.
              </VCardText>
            </VCard>
          </VCol>
        </VRow>

        <VCard class="mt-4">
          <VCardText>
            <VTextarea rows="10">
              <template #append-inner>
                <VBtn
                  icon
                  variant="text"
                  class="mt-3"
                >
                  <VIcon
                    size="32"
                    icon="tabler-send-2"
                  />
                </VBtn>
              </template>
            </VTextarea>
          </VCardText>
        </VCard>
      </div>
    </VCol>

    <VCol cols="4">
      <VCard title="Report details">
        <VCardText>
          <VRow>
            <!-- reported at -->
            <VCol
              cols="4"
              class="font-weight-bold"
            >
              {{ $t('reported-at') }}
            </VCol>
            <VCol cols="8">
              2024-12-02 11:10
            </VCol>

            <!-- reported by -->
            <VCol
              cols="4"
              class="font-weight-bold"
            >
              {{ $t('reported-by') }}
            </VCol>
            <VCol cols="8">
              Mammad
            </VCol>

            <!-- CVE -->
            <VCol
              cols="4"
              class="font-weight-bold"
            >
              {{ $t('CVE') }}
            </VCol>
            <VCol cols="8">
              Server side request forgery
            </VCol>

            <!-- visibility -->
            <VCol
              cols="4"
              class="font-weight-bold"
            >
              {{ $t('visibility') }}
            </VCol>
            <VCol cols="8">
              Private
            </VCol>

            <!-- severity -->
            <VCol
              cols="4"
              class="font-weight-bold"
            >
              {{ $t('severity') }}
            </VCol>
            <VCol cols="8">
              2024-12-02 11:10
            </VCol>
          </VRow>

          <VDivider class="my-4" />

          <VRow>
            <VCol
              cols="4"
              class="font-weight-bold"
            >
              Status
            </VCol>
            <VCol cols="8">
              <VChip
                color="info"
                :label="false"
              >
                In progress
              </VChip>
            </VCol>
            <VCol
              cols="4"
              class="font-weight-bold"
            >
              Payment
            </VCol>
            <VCol cols="8">
                300$
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
